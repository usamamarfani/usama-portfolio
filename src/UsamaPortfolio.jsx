import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function UsamaPortfolio() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 bg-gradient-to-br from-white via-sky-50 to-blue-100 min-h-screen text-slate-800">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">Usama Marfani</h1>
        <p className="text-xl mt-2 text-blue-700 font-medium">Graduate Business Analyst | MSc Business Analytics | Data Enthusiast</p>
      </div>

      <Card className="shadow-xl border-blue-300">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I am a data-driven professional with an MSc in Business Analytics from the University of Exeter, passionate about solving complex problems and improving business processes using data and technology. I bring experience in data analysis, stakeholder collaboration, Agile methodology, and business process optimization with a strong foundation in tools such as Python, SQL, Power BI, Tableau, and Excel Solver.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-xl border-blue-300">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Data Analyst – Marfani Steels (Family Business)</h3>
              <p className="italic">Mar 2020 – Sep 2023</p>
              <ul className="list-disc pl-6">
                <li>Led sales forecasting and data trend analysis to support business strategy.</li>
                <li>Developed dashboards for real-time monitoring using Excel and Power BI.</li>
                <li>Delivered weekly insights to senior leadership and helped reduce forecasting errors.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Microsoft Learn Student Ambassador</h3>
              <p className="italic">Sep 2021 – Dec 2023</p>
              <ul className="list-disc pl-6">
                <li>Organised training workshops on GitHub, Azure, and Power Platform.</li>
                <li>Mentored peers in business analytics and cloud technologies.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Tesco Café Colleague</h3>
              <p className="italic">Feb 2024 – Aug 2024</p>
              <ul className="list-disc pl-6">
                <li>Delivered customer service in a fast-paced retail environment.</li>
                <li>Strengthened teamwork, adaptability, and time management skills.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl border-blue-300">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-4">Academic Projects</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><strong>Electric Vehicles Sentiment Analysis:</strong> Used Python (NLTK, VADER) and Tableau to assess public perception of EVs.</li>
            <li><strong>Price Comparison Platform:</strong> Built with MSSQL, MongoDB, and Python APIs for UK supermarkets.</li>
            <li><strong>Flood Impact Analysis:</strong> Created risk maps using Python and Excel to guide disaster management planning in Pakistan.</li>
            <li><strong>Breast Cancer Detection App:</strong> AI-powered tool built with TensorFlow, Dart, and Firebase for early detection.</li>
            <li><strong>Hospital Management System:</strong> Developed with C#, SQL, and Visual Studio to streamline patient records.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-xl border-blue-300">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <Badge>Python</Badge>
            <Badge>SQL</Badge>
            <Badge>Power BI</Badge>
            <Badge>Tableau</Badge>
            <Badge>Excel Solver</Badge>
            <Badge>Agile</Badge>
            <Badge>Stakeholder Management</Badge>
            <Badge>Business Process Mapping</Badge>
            <Badge>Data Analysis</Badge>
            <Badge>Machine Learning</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl border-blue-300">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">Email: <a href="mailto:usama.marfani11@gmail.com" className="text-blue-600 underline">usama.marfani11@gmail.com</a></p>
          <p className="text-lg">Phone: +44 7398 958202</p>
          <p className="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/usama-marfani-93baa11a3/" className="text-blue-600 underline">usamamarfani</a></p>
        </CardContent>
      </Card>
    </div>
  );
}
