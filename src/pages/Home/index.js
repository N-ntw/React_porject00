import './index.scss'
import Bar from '@/components/Bar'
function Home() {

    return <div>
        <Bar 
        title='Reading Volume' 
        xData={['Novel 1', 'Novel 2', 'Novel 3', 'Novel 4']}
        yData ={[68,55,23,12]} 
        style= {{width: '500px', height: '400px'}}
        />
        
        <Bar title='New Subscription' xData={['Today', 'Yesterday', 'Last week']}
        yData ={[103, 72, 560]} style= {{width: '300px', height: '200px'}}/>
    </div>
}

export default Home