public class QueueElement {
    public Kupec kupec;
    public QueueElement nextElement = null;
    public int timer;

    public QueueElement(Kupec curr, int timer) {
        this.kupec = curr;
        this.nextElement = null;
        this.timer = timer;
    }

    public boolean updateTimer() {
        timer--;
        if(timer <= 0)
            return true;
        return false;
    }

    public void resetTime(int i) {
        this.timer = i;
    }
}