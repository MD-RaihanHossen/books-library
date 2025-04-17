import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LIstedBooks from '../LIstedBooks/LIstedBooks';
import { useLoaderData } from 'react-router-dom';

const Deshbord = () => {

    const datas = useLoaderData()


    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Listed Books</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel>
                    <LIstedBooks datas={datas}></LIstedBooks>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Deshbord;