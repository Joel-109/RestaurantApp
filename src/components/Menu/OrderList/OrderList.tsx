import OrderCard from "./OrderCard";

function OrderList(){
    return(
        <section className="flex flex-col gap-4 ml-2.5 pb-2 overflow-x-auto scrollbar-hide mt-2">
            <h1 className="mt-4 font-bold text-lg"> OrderList </h1>
            <section className="flex gap-8">
                <OrderCard status="Pending" id="12dff3f2" date="09/05/2024" total={99.2}></OrderCard>
                <OrderCard status="Pending" id="12dff3f2" date="09/05/2024" total={99.2}></OrderCard>
                <OrderCard status="Pending" id="12dff3f2" date="09/05/2024" total={99.2}></OrderCard>
                <OrderCard status="Pending" id="12dff3f2" date="09/05/2024" total={99.2}></OrderCard>
                <OrderCard status="Pending" id="12dff3f2" date="09/05/2024" total={99.2}></OrderCard>
                <OrderCard status="Pending" id="12dff3f2" date="09/05/2024" total={99.2}></OrderCard>
                <OrderCard status="Pending" id="12dff3f2" date="09/05/2024" total={99.2}></OrderCard>
            </section>
        </section> 
    );
}

export default OrderList;