public class Trgovina {
    private QueueElement first = null;
    private QueueElement last = null;

    private int ID = 1;
    private int nextTime;


    public void checkTime() {
        QueueElement curr = first;
        QueueElement prev = first;

        //ta element je za ga vrec v cakalno vrsto
        QueueElement back = null;

        while(curr != null) {
            if(curr.updateTimer()){
                novKupec();
                //odstrani element in ga shrani
                back = rm(curr, prev);

                
            }

            curr = curr.nextElement;

            if(curr != prev.nextElement && curr != prev)
                prev = prev.nextElement;
        }
    }

    public void novKupec() {
        //ustvarimo novega kupca - tu morajo biti izbrani se pravilni parametri
        Kupec curr = new Kupec(ID, 
        Main.parameters[2][(ID - 1) % Main.parameters[3].length], 
        Main.parameters[1][(ID - 1) % Main.parameters[2].length], 
        Main.parameters[4][(ID - 1) % Main.parameters[4].length]);

        nextTime += Main.parameters[0][(ID - 1) % Main.parameters[1].length];

        QueueElement nov = 
        for(Blagajna b : Main.blagajne) {
            b.enqueue();
        } 

        ID++;
    }

    private QueueElement rm(QueueElement curr, QueueElement prev) {
        QueueElement save = curr;

            if (curr == first)
                first = first.nextElement;
            else if(curr == last)
                first = curr.nextElement;
            else 
                prev.nextElement = curr.nextElement;
            if(curr == last)
                last = prev;

            return save;
    }

    public void setNextTime(int nextTime) {
        this.nextTime = nextTime;
    }

   
}