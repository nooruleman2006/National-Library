# include <iostream>
# include <iomanip>
# include <windows.h>
using namespace std;

int totalDays(int day, int month, int year)
{
    return day + month * 30 + year * 365;
}

class Address
{
private:
    int houseNo;
    string city;
    string society;

public:
    Address()
    {
        houseNo = 0;
        city = " ";
        society = " ";
    }
    Address(int houseNo, string city, string society)
    {
        this->houseNo = houseNo;
        this->city = city;
        this->society = society;
    }

    void setHouseNo(int houseNo)
    {
        this->houseNo = houseNo;
    }

    void setCity(string city)
    {
        this->city = city;
    }

    void setSociety(string society)
    {
        this->society = society;
    }

    int getHouseNo()
    {
        return houseNo;
    }

    string getCity()
    {
        return city;
    }

    string getSociety()
    {
        return society;
    }


};

class Date
{
private:
    int day, month, year;

public:
    Date()
    {
        day = 0;
        month = 0;
        year = 0;
    }

    Date(int inputDay, int inputMonth, int inputYear)
    {
        day = inputDay;
        month = inputMonth;
        year = inputYear;
    }


    int getDay()
    {
        return day;
    }

    int getmonth()
    {
        return month;
    }

    int getYear()
    {
        return year;
    }
};

class Books
{
private:
    int  bookId;
    string bookName;
    Date issueDate;

public:
    Books()
    {
        bookId = 0;
        bookName = " ";
    }

    Books(int id, string name)
    {
        bookId = id;
        bookName = name;
    }

    void setBookId(int id)
    {
        bookId = id;
    }

    void setBookName(string name)
    {
        bookName = name;
    }

    int getBookId()
    {
        return bookId;
    }

    string getBookName()
    {
        return bookName;
    }

    int getDay()
    {
        return issueDate.getDay();
    }

    int getMonth()
    {
        return issueDate.getmonth();
    }

    int getyear()
    {
        return issueDate.getYear();
    }
    
    void setDOB(int date, int month, int year)
    {
        issueDate = Date(date, month, year);
    }
};

class Member
{
private:
    string name;
    int Id;
    Address add;
    Date MembershipDate;
    Books book[5];
    string status;
    int bookCounter = 0;
    int fine=0;

public:
    Member()
    {
        name = " ";
        Id = 0;
        add = Address();
        MembershipDate = Date();
        string status = " ";
        fine = 0;
    }

    Member(string name, int Id, int hNo, string City, string society, int date, int month, int year,string status)
    {
        this->name = name;
        this->Id = Id;
        add = Address(hNo, City, society);
        MembershipDate = Date(date, month, year);
        this->status = status;
    }

    void setStatus(string status)
    {
        this->status = status;
    }
    void setName(string name)
    {
        this->name = name;
    }

    void setId(int id)
    {
        Id = id;
    }

    void setHouseNo(int HN)
    {
        add.setHouseNo(HN);
    }

    void setCity(string city)
    {
        add.setCity(city);
    }

    void setSociety(string society)
    {
        add.setSociety(society);
    }

    void setDOB(int date, int month, int year)
    {
        Date(date, month, year);
    }
    string getName()
    {
        return name;
    }

    int getId()
    {
        return Id;
    }

    int getDay()
    {
        return MembershipDate.getDay();
    }

    int getMonth()
    {
        return MembershipDate.getmonth();
    }

    int getyear()
    {
        return MembershipDate.getYear();
    }

    int gethn()
    {
        return  add.getHouseNo();
    }

    string getSociety()
    {
        return add.getSociety();
    }

    string getCity()
    {
        return add.getCity();
    }

    string getStatus()
    {
        return status;
    }

    void view()
    {
        cout << " Id no.: " << Id << endl;
        cout << " Status : " << status << endl;
        cout << " Name : " << name << endl;
        cout << " Address. : " << add.getHouseNo() << "," << add.getSociety() << "," <<  add.getCity() << endl;
        cout << " Date of subscription : " << MembershipDate.getDay() << "/" << MembershipDate.getmonth() << "/" << MembershipDate.getYear() << endl;
    }

    void viewMember()
    {
     
     cout << setw(10) << Id << setw(30) << name << setw(10) << status <<  add.getHouseNo() << ","<< add.getCity()<<","<< setw(30) << add.getSociety()
          << MembershipDate.getDay() << "/" << MembershipDate.getmonth() << "/" << setw(5)<< MembershipDate.getYear() << endl << endl;
            
    }

    void setRecord(int id,string name,int day,int month,int year)
    {
        if (bookCounter < 5)
        {
            book[bookCounter].setBookId(id);
            book[bookCounter].setBookName(name);
            book[bookCounter++].setDOB(day, month, year);
           
        }
        else
            cout << "Sorry! Cannot register the book.\nThe member has already 5 books. No more Books can be issued till their return" << endl;
    }

    void getRecord()
    {
        int i = 0;
        while (i < bookCounter)
        {
            cout << setw(10) << book[i].getBookId() << setw(35) << book[i].getBookName()<<book[i].getDay()<<"/"<<book[i].getMonth()
                 << "/"<<book[i].getyear() << endl;
            i++;
        }
        cout << "______________________________________________________________________________________" << endl;
    }

    void delRecord()
    {
        bookCounter = 0;
    }

    int calculateFine(int totalday)
    {
        int i = 0;
        int issueDays = 0;
        while (i < bookCounter)
        {
            issueDays = totalDays(book[i].getDay(), book[i].getMonth(), book[i].getyear());

            if ((totalday - issueDays) > 15 && status == "executive")
            {
              fine = fine + 50;
            }

            if ((totalday - issueDays) > 15 && status == "journal")
            {
                fine = fine + 100;
            }

            if ((totalday - issueDays) <= 15 )
            {
                fine = 0;
            }

            if (totalday < issueDays)
            {
                cout<<"Invalid Date Input"<<endl;
                fine=0;
            }

            i++;
        }
        return fine;
    }
    int getfine()
    {
        return fine;
    }


};



#include <string>

int main(int argc, char* argv[])
{

    int opt = 1, choice = 1, id = 0, finder = 0, hn = 0, counter = 40, bookCounter = 30, i = 0, day = 0, month = 0, year = 0,  totalDay = 0;
    string name = " ", city = " ", society = " ", status = " ";
    char character;
    Member member[50] = {
    { "Ali Khan", 101, 28, "Lahore", "Bahria Town", 15, 5, 2025, "journal" },
    { "Sara Ahmed", 102, 45, "Karachi", "DHA", 21, 4, 2024, "executive" },
    { "Ahmed Raza", 103, 34, "Islamabad", "G-11", 10, 3, 2025, "journal" },
    { "Fatima Noor", 104, 29, "Lahore", "Model Town", 8, 2, 2024, "executive" },
    { "Zainab Malik", 105, 33, "Rawalpindi", "Saddar", 11, 6, 2024, "journal" },
    { "Hamza Tariq", 106, 31, "Karachi", "Gulshan", 23, 5, 2025, "executive" },
    { "Ayesha Khan", 107, 26, "Multan", "Cantt", 3, 1, 2025, "journal" },
    { "Usman Ali", 108, 38, "Quetta", "Satellite Town", 17, 3, 2024, "executive" },
    { "Laiba Qureshi", 109, 30, "Peshawar", "University Town", 1, 4, 2025, "journal" },
    { "Bilal Aslam", 110, 32, "Faisalabad", "Peoples Colony", 19, 2, 2025, "executive" },
    { "Mariam Shah", 111, 27, "Lahore", "Johar Town", 25, 6, 2024, "journal" },
    { "Danish Iqbal", 112, 35, "Sialkot", "Cantt", 7, 7, 2025, "executive" },
    { "Hina Yousuf", 113, 40, "Karachi", "Nazimabad", 6, 3, 2024, "journal" },
    { "Tariq Jameel", 114, 42, "Lahore", "Township", 12, 9, 2025, "executive" },
    { "Kiran Nawaz", 115, 28, "Rawalpindi", "Peshawar Road", 30, 1, 2025, "journal" },
    { "Fahad Mirza", 116, 36, "Islamabad", "F-6", 2, 2, 2024, "executive" },
    { "Noor Fatima", 117, 31, "Hyderabad", "Latifabad", 20, 5, 2024, "journal" },
    { "Zeeshan Arif", 118, 39, "Karachi", "Clifton", 22, 4, 2025, "executive" },
    { "Sana Shabbir", 119, 25, "Lahore", "Gulberg", 14, 6, 2024, "journal" },
    { "Imran Abbas", 120, 44, "Multan", "New Multan", 9, 10, 2024, "executive" },
    { "Mehwish Ali", 121, 37, "Peshawar", "Hayatabad", 26, 12, 2024, "journal" },
    { "Waqar Younis", 122, 43, "Faisalabad", "Jinnah Colony", 4, 6, 2025, "executive" },
    { "Hira Saeed", 123, 29, "Islamabad", "I-8", 18, 2, 2025, "journal" },
    { "Rashid Minhas", 124, 35, "Lahore", "Defense", 13, 5, 2024, "executive" },
    { "Areeba Jan", 125, 30, "Rawalpindi", "Westridge", 16, 3, 2025, "journal" },
    { "Junaid Akram", 126, 41, "Karachi", "North Nazimabad", 5, 11, 2024, "executive" },
    { "Asma Rehman", 127, 33, "Lahore", "Askari", 28, 7, 2025, "journal" },
    { "Nabeel Khan", 128, 34, "Islamabad", "G-10", 27, 6, 2024, "executive" },
    { "Iqra Aziz", 129, 26, "Sialkot", "Sadar Bazar", 24, 8, 2024, "journal" },
    { "Saad Rafique", 130, 38, "Faisalabad", "Satiana Road", 6, 4, 2025, "executive" },
    { "Anum Shahid", 131, 31, "Karachi", "Malir", 29, 3, 2024, "journal" },
    { "Haroon Shah", 132, 32, "Lahore", "Iqbal Town", 10, 5, 2025, "executive" },
    { "Zara Sheikh", 133, 27, "Multan", "Shah Rukn-e-Alam", 13, 7, 2024, "journal" },
    { "Rameez Raja", 134, 39, "Rawalpindi", "Committee Chowk", 7, 9, 2024, "executive" },
    { "Nimra Khan", 135, 28, "Karachi", "Korangi", 1, 10, 2025, "journal" },
    { "Taimoor Bhatti", 136, 44, "Islamabad", "E-11", 30, 11, 2024, "executive" },
    { "Fiza Ali", 137, 25, "Lahore", "Green Town", 2, 6, 2025, "journal" },
    { "Adnan Sami", 138, 42, "Quetta", "Jinnah Town", 15, 4, 2024, "executive" },
    { "Bushra Ansari", 139, 36, "Karachi", "Lyari", 17, 1, 2025, "journal" },
    { "Noman Ijaz", 140, 40, "Peshawar", "Cantt", 19, 8, 2024, "executive" }
    };

    Books book[40] = { {1, "Harry Potter"}, {2, "The Hobbit"},{3, "Pride and Prejudice"},{4, "1984"},{5, "To Kill a Mockingbird"},{6, "The Great Gatsby"},
        {7, "Moby Dick"},{8, "Jane Eyre"},{9, "The Catcher in the Rye"},{10, "War and Peace"},{11, "Crime and Punishment"},{12, "Brave New World"},{13, "The Alchemist"},
        {14, "Animal Farm"}, {15, "The Da Vinci Code"},{16, "The Lord of the Rings"},{17, "The Book Thief"},{18, "Little Women"}, {19, "Wuthering Heights"},
        {20, "Frankenstein"},{21, "The Chronicles of Narnia"},{22, "The monk who sold his Ferrari"}, {23, "The Kite Runner"},{24, "Gone with the Wind"},{25, "Dracula"},{26, "Life of Pi"},
        {27, "The Shining"}, {28, "Twilight"},{29, "The Hunger Games"},{30, "The Maze Runner"} };

    {
        member[0].setRecord(1, "Harry Potter", 1, 6, 2025);
        member[0].setRecord(2, "The Hobbit", 2, 6, 2025);

        member[1].setRecord(3, "Pride and Prejudice", 3, 6, 2025);
        member[1].setRecord(4, "1984", 3, 6, 2025);
        member[1].setRecord(5, "To Kill a Mockingbird", 4, 6, 2025);

        member[2].setRecord(6, "The Great Gatsby", 5, 6, 2025);

        member[3].setRecord(7, "Moby Dick", 5, 6, 2025);
        member[3].setRecord(8, "Jane Eyre", 6, 6, 2025);
        member[3].setRecord(9, "The Catcher in the Rye", 6, 6, 2025);
        member[3].setRecord(10, "War and Peace", 6, 6, 2025);

        member[4].setRecord(11, "Crime and Punishment", 7, 6, 2025);
        member[4].setRecord(12, "Brave New World", 7, 6, 2025);
        member[4].setRecord(13, "The Alchemist", 8, 6, 2025);
        member[4].setRecord(14, "Animal Farm", 8, 6, 2025);
        member[4].setRecord(15, "The Da Vinci Code", 9, 6, 2025);

        member[5].setRecord(16, "The Lord of the Rings", 9, 6, 2025);

        member[6].setRecord(17, "The Book Thief", 10, 6, 2025);
        member[6].setRecord(18, "Little Women", 10, 6, 2025);

        member[7].setRecord(19, "Wuthering Heights", 11, 6, 2025);

        member[8].setRecord(20, "Frankenstein", 11, 6, 2025);
        member[8].setRecord(21, "The Chronicles of Narnia", 12, 6, 2025);
        member[8].setRecord(22, "The monk who sold his Ferrari", 12, 6, 2025);

        member[9].setRecord(23, "The Kite Runner", 13, 6, 2025);
        member[9].setRecord(24, "Gone with the Wind", 13, 6, 2025);
        member[9].setRecord(25, "Dracula", 13, 6, 2025);

        member[10].setRecord(26, "Life of Pi", 14, 6, 2025);
        member[10].setRecord(27, "The Shining", 14, 6, 2025);
        member[10].setRecord(28, "Twilight", 15, 6, 2025);
        member[10].setRecord(29, "The Hunger Games", 15, 6, 2025);

        member[11].setRecord(30, "The Maze Runner", 16, 6, 2025);

        member[12].setRecord(1, "Harry Potter", 16, 6, 2025);
        member[12].setRecord(2, "The Hobbit", 17, 6, 2025);
        member[12].setRecord(3, "Pride and Prejudice", 17, 6, 2025);
        member[12].setRecord(4, "1984", 18, 6, 2025);
        member[12].setRecord(5, "To Kill a Mockingbird", 18, 6, 2025);

        member[13].setRecord(6, "The Great Gatsby", 19, 6, 2025);

        member[14].setRecord(7, "Moby Dick", 19, 6, 2025);
        member[14].setRecord(8, "Jane Eyre", 19, 6, 2025);
        member[14].setRecord(9, "The Catcher in the Rye", 20, 6, 2025);

        member[15].setRecord(10, "War and Peace", 20, 6, 2025);

        member[16].setRecord(11, "Crime and Punishment", 21, 6, 2025);
        member[16].setRecord(12, "Brave New World", 21, 6, 2025);

        member[17].setRecord(13, "The Alchemist", 22, 6, 2025);
        member[17].setRecord(14, "Animal Farm", 22, 6, 2025);

        member[18].setRecord(15, "The Da Vinci Code", 23, 6, 2025);
        member[18].setRecord(16, "The Lord of the Rings", 23, 6, 2025);
        member[18].setRecord(17, "The Book Thief", 24, 6, 2025);

        member[19].setRecord(18, "Little Women", 24, 6, 2025);

        member[20].setRecord(19, "Wuthering Heights", 25, 6, 2025);
        member[20].setRecord(20, "Frankenstein", 25, 6, 2025);

        member[21].setRecord(21, "The Chronicles of Narnia", 25, 6, 2025);

        member[22].setRecord(22, "The monk who sold his Ferrari", 26, 6, 2025);
        member[22].setRecord(23, "The Kite Runner", 26, 6, 2025);

        member[23].setRecord(24, "Gone with the Wind", 26, 6, 2025);

        member[24].setRecord(25, "Dracula", 27, 6, 2025);
        member[24].setRecord(26, "Life of Pi", 27, 6, 2025);
        member[24].setRecord(27, "The Shining", 27, 6, 2025);

        member[25].setRecord(28, "Twilight", 28, 6, 2025);

        member[26].setRecord(29, "The Hunger Games", 28, 6, 2025);

        member[27].setRecord(30, "The Maze Runner", 29, 6, 2025);

        member[28].setRecord(1, "Harry Potter", 29, 6, 2025);
        member[28].setRecord(2, "The Hobbit", 29, 6, 2025);

        member[29].setRecord(3, "Pride and Prejudice", 30, 6, 2025);
        member[29].setRecord(4, "1984", 30, 6, 2025);
        member[29].setRecord(5, "To Kill a Mockingbird", 30, 6, 2025);
        member[29].setRecord(6, "The Great Gatsby", 30, 6, 2025);
        member[29].setRecord(7, "Moby Dick", 30, 6, 2025);

        member[30].setRecord(8, "Jane Eyre", 1, 7, 2025);
        member[31].setRecord(9, "The Catcher in the Rye", 1, 7, 2025);
        member[32].setRecord(10, "War and Peace", 2, 7, 2025);
        member[33].setRecord(11, "Crime and Punishment", 2, 7, 2025);
        member[34].setRecord(12, "Brave New World", 2, 7, 2025);
        member[35].setRecord(13, "The Alchemist", 3, 7, 2025);
        member[36].setRecord(14, "Animal Farm", 3, 7, 2025);
        member[37].setRecord(15, "The Da Vinci Code", 3, 7, 2025);
        member[38].setRecord(16, "The Lord of the Rings", 4, 7, 2025);
        member[39].setRecord(17, "The Book Thief", 4, 7, 2025);
        

    } // book record
    
    if (argc > 1 && string(argv[1]) == "--automated") {
        string command;
        while (cin >> command) {
            if (command == "GET_MEMBERS") {
                cout << "[";
                for (int j = 0; j < counter; j++) {
                    cout << "{\"id\":" << member[j].getId()
                         << ",\"name\":\"" << member[j].getName() << "\""
                         << ",\"status\":\"" << member[j].getStatus() << "\""
                         << ",\"city\":\"" << member[j].getCity() << "\""
                         << ",\"hn\":" << member[j].gethn()
                         << ",\"society\":\"" << member[j].getSociety() << "\""
                         << ",\"day\":" << member[j].getDay()
                         << ",\"month\":" << member[j].getMonth()
                         << ",\"year\":" << member[j].getyear()
                         << "}";
                    if (j < counter - 1) cout << ",";
                }
                cout << "]\nEND_OF_RESPONSE\n";
            }
            else if (command == "GET_BOOKS") {
                cout << "[";
                for (int j = 0; j < bookCounter; j++) {
                    cout << "{\"id\":" << book[j].getBookId()
                         << ",\"name\":\"" << book[j].getBookName() << "\"}";
                    if (j < bookCounter - 1) cout << ",";
                }
                cout << "]\nEND_OF_RESPONSE\n";
            }
            else if (command == "ADD_MEMBER") {
                int nid, nhn, nday, nmonth, nyear;
                string nname, ncity, nsociety, nstatus;
                cin >> nid >> nname >> nhn >> ncity >> nsociety >> nstatus >> nday >> nmonth >> nyear;
                member[counter].setId(nid);
                member[counter].setName(nname);
                member[counter].setHouseNo(nhn);
                member[counter].setCity(ncity);
                member[counter].setSociety(nsociety);
                member[counter].setStatus(nstatus);
                member[counter].setDOB(nday, nmonth, nyear);
                counter++;
                cout << "{\"status\":\"success\"}\nEND_OF_RESPONSE\n";
            }
            else if (command == "ADD_BOOK") {
                int nid;
                string nname;
                cin >> nid >> nname;
                book[bookCounter++] = Books(nid, nname);
                cout << "{\"status\":\"success\"}\nEND_OF_RESPONSE\n";
            }
            else if (command == "CALCULATE_FINE") {
                int fday, fmonth, fyear, fid;
                cin >> fday >> fmonth >> fyear >> fid;
                int ftotalDay = totalDays(fday, fmonth, fyear);
                int calculatedFine = 0;
                for (int j = 0; j < counter; j++) {
                    if (member[j].getId() == fid) {
                        calculatedFine = member[j].calculateFine(ftotalDay);
                        break;
                    }
                }
                cout << "{\"fine\":" << calculatedFine << "}\nEND_OF_RESPONSE\n";
            }
            else if (command == "ISSUE_BOOK") {
                int mid, bid, iday, imonth, iyear;
                cin >> mid >> bid >> iday >> imonth >> iyear;
                bool foundMem = false, foundBook = false;
                string bname = "";
                for (int j = 0; j < bookCounter; j++) {
                    if (book[j].getBookId() == bid) {
                        foundBook = true;
                        bname = book[j].getBookName();
                        break;
                    }
                }
                for (int j = 0; j < counter; j++) {
                    if (member[j].getId() == mid) {
                        foundMem = true;
                        if (foundBook) {
                            member[j].setRecord(bid, bname, iday, imonth, iyear);
                        }
                        break;
                    }
                }
                if (foundMem && foundBook) {
                    cout << "{\"status\":\"success\"}\nEND_OF_RESPONSE\n";
                } else {
                    cout << "{\"status\":\"error\", \"message\":\"Member or Book not found\"}\nEND_OF_RESPONSE\n";
                }
            }
            else if (command == "EXIT") {
                break;
            }
            // flush output to ensure Node gets it immediately
            cout << flush;
        }
        return 0;
    }

    cout << endl << endl << endl;
    cout << "Note: Sample data has been preloaded into the System for your convenience.\nYou can directly test all functionalities without entering data manually." << endl;
    cout << "However, the program is fully capable of accepting user Input" << endl << endl;
    cout << "******************************************************************************* " << endl;
    cout << "***********                  WELCOME TO NATIONAL LIBRARY             ********** " << endl;
    cout << "*******************************************************************************" << endl << endl << endl;

    while (opt != 0)
    {
        choice = 1;
        cout << "************************ PRESS 1 For Administration Directory ***********************" << endl;
        cout << "************************ PRESS 2 TO MANAGE BOOKS  ***********************" << endl;
        cout << "************************ PRESS 3 TO Issue/Return Section ***********************" << endl;
        cout << "************************ PRESS 4 TO MANAGE Fines  ***********************" << endl;
        cout << "************************ Press 0 Exit  ***********************" << endl << endl << endl;

        cout << "Kindly Enter your choice: ";

        cin >> opt;
        switch (opt)
        {
        case 1:
            cout << "************************* Welcome to Administration Directory ***********************" << endl << endl << endl;
            while (choice != 0)
            {
                cout << "************************ PRESS 1 TO View ALL MEMBERS DATA   ******************" << endl;
                cout << "************************ PRESS 2 TO ADD A Member        **********************" << endl;
                cout << "************************ PRESS 3 TO Edit A RECORD       ***********************" << endl;
                cout << "************************ PRESS 4 TO Delete A MEMBER Record  ***********************" << endl;
                cout << "************************ PRESS 5 TO VIEW Data   ***********************" << endl;
                cout << "************************ Press 0 Exit  ***********************" << endl;

                cout << "Kindly Enter your choice: ";

                cin >> choice;
                switch (choice)
                {
                case 1:
                    cout << "*************** Displaying Record of all the members" << endl;
                    cout << left;
                    finder = 0;

                    cout << "------------------------------------------------------------------------------------------------------------" << endl;
                    cout << setw(10) << "ID" << setw(30) << "Name" << setw(10) << "Status" << setw(30) << "Address"
                        << setw(5) << "Date Of Subscription" << endl;
                    cout << "------------------------------------------------------------------------------------------------------------" << endl;
                    while (finder < counter)
                    {
                        member[finder].viewMember();
                        finder++;
                    }
                    cout << "------------------------------------------------------------------------------------------------------------" << endl;
                    break;


                case 2:
                    cout << "***** Entering data of Member." << counter + 1 << " *****" << endl;
                    cout << "Enter Id: ";
                    cin >> id;
                    while (id < 0)
                    {
                        cout << "Invalid Input! Enter again";
                        cin >> id;
                    }

                    finder = 0;
                    while (finder < counter)
                    {
                        if (member[finder].getId() == id)
                        {
                            cout << "There already exists a member with this id number. Please enter another Id number: ";
                            cin >> id;
                            finder = 0;
                        }
                        else
                            finder++;
                    }


                    cout << "Enter name :";
                    cin >> name;
                    cout << "Enter House no. :";
                    cin >> hn;
                    cout << "Enter society :";
                    cin >> society;
                    cout << "Enter city :";
                    cin >> city;
                    cout << "Enter Status : ";
                    cin >> status;

                    cout << "Enter Subscription Date" << endl;
                    cout << "Enter day: ";
                    cin >> day;
                    while (day < 0 && day>31)
                    {
                        cout << "Invalid Input! Enter Again:";
                        cin >> day;
                    }

                    cout << "Enter Month: ";
                    cin >> month;
                    while (month < 0 && month>12)
                    {
                        cout << "Invalid Input! Enter Again:";
                        cin >> month;
                    }

                    cout << "Enter Year: ";
                    cin >> year;
                    while (year < 0)
                    {
                        cout << "Invalid Input! Enter Again:";
                        cin >> year;
                    }

                    member[counter].setId(id);
                    member[counter].setName(name);
                    member[counter].setHouseNo(hn);
                    member[counter].setSociety(society);
                    member[counter].setStatus(status);
                    member[counter].setCity(city);
                    member[counter++].setDOB(day, month, year);
                

                    cout << "Member added successfully" << endl;
                   
                break;

                case 3:
                    cout << " ******************************* Editing data *******************************" << endl;
                    cout << "Enter Member Id whose data you want to edit:";
                    cin >> id;
                    finder = 0;
                    while (finder <= counter)
                    {
                        if (member[finder].getId() == id)
                        {
                            cout << "Do you want to edit name of Member \n Press 'y' for YES 'n' for NO: ";
                            cin >> character;
                            if (character == 'y')
                            {
                                cout << " Enter new name of the Member: ";
                                cin >> name;
                                member[finder].setName(name);
                                cout << " ***** Name changed successfully *****" << endl;
                                cout << endl;
                            }

                            cout << "Do you want to edit Address of Member \n Press 'y' for YES 'n' for NO: ";
                            cin >> character;
                            if (character == 'y')
                            {
                                cout << " Enter new addres of the member " << endl;
                                cout << "Enter House No. :";
                                cin >> hn;
                                cout << "Enter Society :";
                                cin >> society;
                                cout << "Enter City :";
                                cin >> city;

                                member[finder].setHouseNo(hn);
                                member[finder].setSociety(society);
                                member[finder].setCity(city);
                                cout << " ***** Address changed successfully *****" << endl;
                                cout << endl;
                            }
                            break;
                        }
                        finder++;
                    }

                    if (finder > counter)
                    {
                        cout << "Member with this Id not found" << endl;
                    }

                    break;

                case 4:
                    cout << " ******************************* Deleting data *******************************" << endl;
                    cout << "Enter Member Id whose data you want to delete:";
                    cin >> id;
                    finder = 0;
                    
                    while (finder <= counter)
                    {
                        if (member[finder].getId() == id)
                        {
                            cout << "Are you sure You want to delete the data \n Press 'y' for YES 'n' for NO: ";
                            cin >> character;
                            if (character == 'y')
                            {
                                i = finder;
                                while (i < counter)
                                {
                                    member[i] = member[i + 1];
                                    i++;
                                }
                                counter--;
                                cout << "Deleted successfully." << endl;
                            }

                            else if (character == 'n')
                            {
                                cout << "Deletion terminated." << endl;
                            }

                            else
                                cout << "Invalid choice!" << endl;

                        break;
                        }

                        finder++;
                    }

                    if (finder > counter)
                    {
                        cout << "Member with this Id not found" << endl;
                    }

                break;

                case 5:
                    cout << "****************** Displaying Member Data ******************" << endl << endl;
                    cout << "Enter Member Id to view Record : ";
                    cin >> id;

                    finder = 0;
                    while (finder <= counter)
                    {
                        if (member[finder].getId() == id)
                        {
                            member[finder].view();
                            cout << endl;
                            break;
                        }
                        finder++;
                    }

                    if (finder > counter)
                    {
                        cout << "Member Id not found" << endl;
                    }
                break;
               

                case 0:
                    cout << "Member Management Directory Terminated......" << endl;
                    break;

                default:
                    cout << "Invalid Input! Kindly enter a valid Value." << endl;
                    break;

               
                }
            }
            break;


        case 2:
            cout << "************************ Welcome to Books Management System **************************" << endl << endl << endl;
            while (choice != 0)
            {
                cout << "************************ PRESS 1 TO View All Books  ******************" << endl;
                cout << "************************ PRESS 2 TO ADD A Book    ********************" << endl;
                cout << "************************ PRESS 3 TO Edit A RECORD   ***********************" << endl;
                cout << "************************ PRESS 4 TO Delete A Book  ***********************" << endl;
                cout << "************************ PRESS 5 TO VIEW Specified ID Book   ***********************" << endl;
                cout << "************************ Press 0 Exit  ***********************" << endl;

                cout << "Kindly Enter your choice: ";

                cin >> choice;
                switch (choice)
                {
                case 1:
                    finder = 0;
                    cout << left;
                    cout << "The Books available at the Library are as under:-" << endl;
                    cout << "______________________________________________________________________________________" << endl;
                    cout << setw(10) << "Book Id" << setw(35) << "Book Name" << endl;
                    while (finder < bookCounter)
                    {
                        cout << setw(10) << book[finder].getBookId() << setw(35) << book[finder].getBookName() << endl;
                        finder++;
                    }
                    cout << "______________________________________________________________________________________" << endl;
                    break;

                case 2:
                    cout << "******************** Adding a Book *********************" << endl;
                    cout << "Enter book Id:";
                    cin >> id;
                    while (id <= 0)
                    {
                        cout << "Invalid Input! Kindly enter a valid input:";
                        cin >> id;
                    }
                    
                    finder = 0;
                    while (finder < bookCounter)
                    {
                        if (book[finder].getBookId() == id)
                        {
                            cout << "There already exists a book with this ID number.\n Please Enter Another ID number for this book: ";
                            cin >> id;
                            finder = 0;
                        }
                        else
                        finder++;
                    }

                    cout << "Enter Book name:";
                    cin >> name;
                    book[bookCounter++] = Books(id, name);
                    break;


                case 3:
                    cout << "******************** Edit a Book Record *********************" << endl;
                    cout << "Enter book Id whose data you want to edit:";
                    cin >> id;
                    finder = 0;
                    while (finder <= bookCounter)
                    {
                        if (book[finder].getBookId() == id)
                        {
                            cout << "Enter new name of the book: ";
                            cin >> name;
                            book[finder].setBookName(name);
                            break;
                        }
                        finder++;
                    }

                    if (finder > bookCounter)
                    {
                        cout << "Book ID not found" << endl;
                    }
                   
                    break;

                case 4:
                    cout << "Enter Book Id which you want to delete: ";
                    cin >> id;
                    finder = 0;
                    while (finder <= bookCounter)
                    {
                        if (book[finder].getBookId() == id)
                        {
                            cout << "Are you sure you want to delete \nPress 'y' for Yes and Press 'n' for No : ";
                            cin >> character;
                            if (character == 'y')
                            {
                                i = finder;
                                cout << "Book Deleted Successfully" << endl;
                                while (i < bookCounter)
                                {
                                    book[i].setBookId(book[i + 1].getBookId());
                                    book[i].setBookName(book[i + 1].getBookName());
                                    i++;
                                }
                                bookCounter--;
                            }
                            else if (character == 'n')
                            {
                                cout << "Deletion Terminated" << endl;
                            }
                            else
                                cout << "Invalid choice!" << endl;
                        break;
                        }

                        finder++;
                    }

                    if (finder > bookCounter)
                    {
                        cout << "Book ID not found" << endl;
                    }
                    break;

                case 5:
                    cout << "Enter book id whose data ou want to view:";
                    cin >> id;
                    finder = 0;
                    while (finder <= bookCounter)
                    {
                        if (book[finder].getBookId() == id)
                        {
                            cout << "______________________________________________________________________________________" << endl;
                            cout << setw(10) << "Book Id" << setw(35) << "Book Name" << endl;
                            cout << "______________________________________________________________________________________" << endl;
                            cout << setw(10) << book[finder].getBookId() << setw(35) << book[finder].getBookName() << endl;
                            cout << "______________________________________________________________________________________" << endl << endl;
                            break;
                        }
                        finder++;
                    }

                    if (finder > bookCounter)
                    {
                        cout << "Sorry! Book Id not found." << endl;
                    }
                    break;

                case 0:
                    cout << "Book Management Terminated......" << endl;
                    break;

                default:
                    cout << "Invalid Input! Kindly enter a valid Value." << endl;
                    break;
                }
            }
            break;

        case 3:
            cout << "************************ Welcome to Issue/Return section **************************" << endl << endl << endl;
            while (choice != 0)
            {
                cout << "************************ PRESS 1 TO View all Records  ****************" << endl;
                cout << "************************ PRESS 2 TO Issue a Book     ****************" << endl;
                cout << "************************ PRESS 3 TO edit a Record     ****************" << endl;
                cout << "************************ PRESS 4 TO Return a Book     ***************" << endl;
                cout << "************************ PRESS 5 TO View Record of a specified Member  ***************" << endl;

                cout << "************************ Press 0 Exit  ***********************" << endl;

                cout << "Kindly Enter your choice: ";
                cin >> choice;

                switch (choice)
                {
                case 1:
                    finder = 0;
                    cout << left;
                    while (finder < counter)
                    {
                        cout << "______________________________________________________________________________________" << endl;
                        cout << setw(10) << member[finder].getId() << setw(35) << member[finder].getName()<<setw(10)<< member[finder].getStatus() << endl;
                       
                        member[finder].getRecord();
                        finder++;
                    }
                   
                break;

                case 2:
                    cout << "******************** Issue a Book *******************" << endl;
                    cout << "Enter your member Id to issue a Book: ";
                    cin >> id;
                    finder = 0;
                    i = 0;
                    while (finder <= counter)
                    {
                        if (member[finder].getId() == id)
                        {
                            cout << "Book Id you want to issue:";
                            cin >> id;
                            while (i <= bookCounter)
                            {
                                if (book[i].getBookId() == id)
                                {
                                    cout << "Enter issue Date:" << endl;
                                    cout << "Enter Date:";
                                    cin >> day;
                                    while (day < 0 || day > 31)
                                    {
                                        cout << "Invalid Input! Enter again:";
                                        cin >> day;
                                    }

                                    cout << "Enter month:";
                                    cin >> month;
                                    while (month < 0 || month > 12)
                                    {
                                        cout << "Invalid Input! Enter again:";
                                        cin >> day;
                                    }

                                    cout << "Enter Year:";
                                    cin >> year;
                                    while (year < 0)
                                    {
                                        cout << "Invalid Input! Enter again:";
                                        cin >> year;
                                    }


                                    member[finder].setRecord(id, book[i].getBookName(), day, month, year);
                                    break;
                                }
                                i++;
                            }
                            if (i > bookCounter)
                            {
                                cout << "Book Id not found" << endl;
                            }
                            
                            break;
                        }
                        finder++;
                    }


                    if (finder > counter)
                    {
                        cout << "Member with this Id not found" << endl;
                    }

                    break;

                case 3:
                    cout << "******************** Edit a Record *******************" << endl;
                    cout << "Enter Book Id whose Record you want to edit: ";
                    cin >> id;
                    finder = 0;
                    i = 0;
                    while (finder <= counter)
                    {
                        if (book[finder].getBookId() == id)
                        {
                            cout << "Enter new name:" << endl;
                            cin >> name;
                            book[finder].setBookName(name);
                            break;
                        }
                        finder++;
                    }
                            
                    if (i > bookCounter)
                    {
                        cout << "Book Id not found" << endl;
                    }
                    break;

                case 4:
                    cout << "******************** Return a Book *******************" << endl;
                    cout << "Enter Member Id who want to return a book: ";
                    cin >> id;
                    finder = 0;
                    while (finder <= counter)
                    {
                        if (member[finder].getId() == id)
                        {
                            cout << "Are you sure you want to return the books.\n Press 'y' for Yes and 'n' for No: ";
                            cin >> character;
                            if (character == 'y')
                            {
                                member[finder].delRecord();
                                cout << "Book Returned Successfully" << endl;
                            }

                            else if (character == 'n')
                            {
                                cout << "Returning book Terminated" << endl;
                            }

                            else
                                cout << "Invalid choice!" << endl;
                            break;
                        }
                        finder++;
                    }

                    if (finder > counter)
                    {
                        cout << "Member ID not found." << endl;
                    }
                  
                    break;

                case 5:
                    cout << "******************** View Specified Record *******************" << endl;
                    cout << "Enter Member Id whose record you want to delete: ";
                    cin >> id;
                    finder = 0;
                    while (finder <= counter)
                    {
                        if (member[finder].getId() == id)
                        {
                            cout << "______________________________________________________________________________________" << endl;
                            cout << setw(10) << member[finder].getId() << setw(35) << member[finder].getName() << setw(10) << member[finder].getStatus() << endl;

                            member[finder].getRecord();
                            break;
                        }
                        finder++;
                    }

                    if (finder > counter)
                    {
                        cout << "Member ID not found." << endl;
                    }
                    break;



                }
            }
            break;

        case 4:
            cout << "********************* Calculating Fines *******************" << endl;

                    cout << "Enter Today's Date (Greater than 4/7/2025)" << endl;
                    cout << "Enter Day: ";
                    cin >> day;
                    while (day < 0 || day >31)
                    {
                        cout << "Invalid Input! Enter again:";
                        cin >> day;
                    }

                    cout << "Enter Month: ";
                    cin >> month;
                    while (month < 0 || month >12)
                    {
                        cout << "Invalid Input! Enter again:";
                        cin >> month;
                    }
                    cout << "Enter Year: ";
                    cin >> year;
                    while (year < 0 )
                    {
                        cout << "Invalid Input! Enter again:";
                        cin >> year;
                    }

                    cout << "Enter Person Id whose fine You want to Calculate :";
                    cin >> id;

                    finder = 0;
                    while (finder <= counter)
                    {
                        if (member[finder].getId() == id)
                        {

                            cout << "______________________________________________________________________________________" << endl;
                            cout << setw(10) << member[finder].getId() << setw(35) << member[finder].getName() << setw(10) << member[finder].getStatus() << endl;

                            member[finder].getRecord();
                            totalDay = totalDays(day, month, year);

                            cout << "The Fine of this member is:" << member[finder].calculateFine(totalDay) << endl<<endl<<endl;
                           

                            cout << "Dear " << member[finder].getName() << ", your books due Date has passed - a fine of " 
                                 << member[finder].getfine() << " has been applied to your account." << endl;
                            break;
                        }
                        finder++;
                    }

                    if (finder > counter)
                    {
                        cout << "Member ID not found." << endl;
                    }
                   
                    break;

        

       


            
        }
    }
    return 0;
}
