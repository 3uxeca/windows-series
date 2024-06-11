import React, { useState } from 'react';

interface CostItem {
  name: string;
  amount: number;
}

const PriceCalculator: React.FC = () => {
  // 원가 항목을 관리하는 상태
  const [costItems, setCostItems] = useState<CostItem[]>([
    { name: '직접재료비', amount: 7000 },
    { name: '직접노무비', amount: 2000 },
    { name: '직접경비', amount: 2000 },
    { name: '제조간접비', amount: 1000 }
  ]);
  // 이익률을 관리하는 상태
  const [profitMargin, setProfitMargin] = useState(150);

  // 새로 추가할 원가 항목의 이름과 금액을 관리하는 상태
  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState(0);

  // 기존 원가 항목의 금액을 변경할 수 있는 입력 필드와 핸들러
  const handleCostChange = (index: number, amount: number) => {
    const newCostItems = [...costItems];
    newCostItems[index].amount = amount;
    setCostItems(newCostItems);
  };

  // 새 원가 항목을 추가할 수 있는 입력 필드와 핸들러
  const handleAddCostItem = () => {
    if (newItemName.trim() && newItemAmount > 0) {
      setCostItems([...costItems, { name: newItemName, amount: newItemAmount }]);
      setNewItemName('');
      setNewItemAmount(0);
    }
  };

  // 모든 원가 항목의 합계
  const totalCost = costItems.reduce((sum, item) => sum + item.amount, 0);
  // totalCost와 profitMargin을 바탕으로 계산된 판매 가격
  const sellingPrice = totalCost * (1 + profitMargin / 100);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>원가 항목</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {costItems.map((item, index) => (
            <tr key={index}>
              <td>원가</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
          <tr>
            <td>이익율(마진)</td>
            <td colSpan={2}>{profitMargin}%</td>
          </tr>
          <tr>
            <td colSpan={2}>판매가(소비자가격)</td>
            <td>{sellingPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div>
        {costItems.map((item, index) => (
          <label key={index}>
            {item.name}:
            <input type="number" value={item.amount} onChange={e => handleCostChange(index, Number(e.target.value))} />
          </label>
        ))}
        <label>
          이익율:
          <input type="number" value={profitMargin} onChange={e => setProfitMargin(Number(e.target.value))} />
        </label>

        <div>
          <label>
            항목입력:
            <input type="text" value={newItemName} onChange={e => setNewItemName(e.target.value)} />
          </label>
          <label>
            금액:
            <input type="number" value={newItemAmount} onChange={e => setNewItemAmount(Number(e.target.value))} />
          </label>
          <button onClick={handleAddCostItem}>원가 항목 추가</button>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
