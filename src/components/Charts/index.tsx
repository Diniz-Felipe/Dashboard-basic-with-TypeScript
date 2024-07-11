import * as S from './styles';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

interface DataPoint {
    name: string;
    value: number;
}

const data: DataPoint[] = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 60 },
    { name: 'Mar', value: 12 },
    { name: 'Apr', value: 45 },
    { name: 'May', value: 34 },
    { name: 'Jun', value: 39 },
    { name: 'Jul', value: 49 },
]

export const Charts: React.FC = () => {  
    return (
        <S.Charts>
            <h5>Friday, December 15th 2023</h5>
            <ResponsiveContainer width='100%' height={320}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 1, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                    <Line type='monotone' dataKey="value" stroke='#8884d8' activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </S.Charts>
    )
};