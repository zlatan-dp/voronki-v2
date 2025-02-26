'use client'

import PoliticsTitle from "../../components/politics/politicsTitle/politicsTitle"
import PoliticsSubTitle from "../../components/politics/politicsSubTitle/politicsSubTitle"
import PoliticsText from "../../components/politics/politicsText/politicsText"
import BackBtn from "../../components/backBtn/backBtn"

export default function CookieFilesPolicy() {

    return (
        <div style={{padding: '20px', position: 'relative'}}>
            <BackBtn step={0} href={"/flow-06"}/>
            <PoliticsTitle>Wie KIVI Cookies und ähnliche Technologien verwendet</PoliticsTitle>            
            <PoliticsSubTitle>1. Cookie</PoliticsSubTitle>
            <PoliticsText>Ein Cookie ist eine Textdatei, die von einem Webserver auf einem Computer oder Mobilgerät gespeichert wird, und der Inhalt eines Cookies kann nur von dem Server abgerufen und gelesen werden, der das Cookie erstellt hat. Cookies sind einzigartig für den Browser oder die mobile Anwendung, die Sie verwenden. Der Text in einem Cookie besteht oft aus Identifikatoren, Seitennamen und einigen Zahlen und Zeichen.</PoliticsText>
            <PoliticsText>Manchmal speichert KIVI Cookies auf Computern oder Mobilgeräten, um die Benutzererfahrung zu verbessern, einschließlich der folgenden Szenarien:</PoliticsText>
            <PoliticsText>(1) Technische Cookies: Anmeldung und Verifizierung. Wenn Sie sich auf einer Website anmelden, stellen die „sitzungsbasierten“ Cookies sicher, dass Ihr Besuch auf dieser Website so reibungslos wie möglich funktioniert.</PoliticsText>
            <PoliticsText>(2) Personalisierungs-Cookies: Speicherung Ihrer Präferenzen und Einstellungen. Eine Website kann Cookies verwenden, um Einstellungen wie die Spracheinstellung und Schriftgröße auf Ihrem Computer oder Mobilgerät, Artikel in Ihrem Einkaufswagen und andere Browsereinstellungen zu speichern.</PoliticsText>
            <PoliticsText>(3) Werbe-Cookies. KIVI verwendet Cookies, um Informationen über Ihre Online-Aktivitäten und -Interessen zu sammeln und Ihnen Werbung bereitzustellen, die am stärksten mit Ihnen korreliert.</PoliticsText>
            <PoliticsText>(4) Statistik-Cookies. Mit Cookies kann KIVI Informationen über Ihre Nutzung unserer Websites und anderer Anwendungen sammeln, entweder für einen einzelnen Besuch (unter Verwendung eines Sitzungscookies) oder für wiederholte Besuche (unter Verwendung eines dauerhaften Cookies).</PoliticsText>
            <PoliticsText>(5) Social-Media-Cookies. Social-Media-Cookies sind mit Diensten verknüpft, die von Dritten bereitgestellt werden, wie z. B. „Gefällt mir“-Schaltflächen und „Teilen“-Schaltflächen. Der Drittanbieter erbringt diese Dienste als Gegenleistung dafür, dass Sie erkennen, dass Sie unsere Websites besucht haben.</PoliticsText>
            <PoliticsText>Sie können Cookies nach Belieben verwalten oder löschen. Sie können alle auf Ihrem Computer gespeicherten Cookies löschen, und die meisten aktuellen Webbrowser bieten die Möglichkeit, Cookies zu blockieren. Das Blockieren von Cookies erfordert jedoch, dass Sie Ihre Benutzereinstellungen bei jedem Besuch unserer Website ändern. Wenn Sie Cookies löschen, müssen Sie Ihre Einstellungen ändern, wenn Sie die KIVI-Websites das nächste Mal besuchen. Das Deaktivieren von Cookies kann Ihre Nutzung einiger oder aller Funktionen dieser Dienste beeinträchtigen.</PoliticsText>
            <PoliticsSubTitle>2. Web-Beacons und Pixel-Tags</PoliticsSubTitle>
            <PoliticsText>Zusätzlich zu Cookies können KIVI und einige Drittanbieter auch Web-Beacons oder Pixel-Tags auf Websites verwenden. Ein Web-Beacon ist normalerweise eine elektronische Grafik, die in eine Website oder E-Mail eingebettet ist, um Ihre Geräte-Cookies zu identifizieren, wenn Sie die Website oder E-Mail durchsuchen. Pixel-Tags ermöglichen es KIVI, E-Mails auf eine für Sie lesbare Weise zu versenden und herauszufinden, ob eine E-Mail geöffnet wurde.</PoliticsText>
            <PoliticsText>KIVI und einige Dritte verwenden diese Technologien für verschiedene Zwecke, einschließlich der Analyse der Servicenutzung (zusammen mit Cookies) und der Bereitstellung zufriedenstellenderer Inhalte und Werbung für Sie. Wenn Sie beispielsweise eine E-Mail von KIVI erhalten, kann diese eine Klick-URL enthalten, die auf eine KIVI-Webseite verlinkt. Wenn Sie auf den Link klicken, verfolgt KIVI Ihren Besuch, um uns zu helfen, Ihre Präferenzen für Produkte und Dienstleistungen kennenzulernen und unseren Kundenservice zu verbessern. Sie können sich jederzeit von der Mailingliste von KIVI abmelden, wenn Sie nicht auf diese Weise verfolgt werden möchten.</PoliticsText>
            <PoliticsSubTitle>3. Anderer lokaler Speicher</PoliticsSubTitle>
            <PoliticsText>KIVI und einige Drittanbieter können in bestimmten Produkten und Diensten andere lokale Speichertechnologien verwenden, z. B. Local Shared Objects (auch „Flash-Cookies“ genannt) und HTML5 Local Storage. Ähnlich wie Cookies speichern diese Technologien Informationen auf Ihrem Gerät und können einige Informationen über Ihre Aktivitäten und Präferenzen aufzeichnen. Diese Technologien können jedoch andere Medien als Cookies verwenden. Daher können Sie sie möglicherweise nicht mit Standard-Browser-Tools und -Einstellungen steuern. Einzelheiten zum Deaktivieren oder Löschen von Informationen, die in Flash-Cookies enthalten sind.</PoliticsText>
            <PoliticsSubTitle>4. Nicht verfolgen</PoliticsSubTitle>
            <PoliticsText>Viele Webbrowser bieten eine Do-Not-Track-Funktion, die Do-Not-Track-Anforderungen an Websites freigeben kann. Derzeit haben große Internet-Standardisierungsorganisationen keine Richtlinien aufgestellt, um festzulegen, wie Websites mit diesen Anfragen umgehen sollen.</PoliticsText>
            <PoliticsText>Wenn Sie Do Not Track oder andere ähnliche Funktionen Ihres Browsers aktivieren, wird KIVI die Art und Weise, wie wir Ihre Daten wie in dieser Erklärung beschrieben erfassen und verwenden, nicht ändern. Wir behalten uns jedoch das Recht vor, auf Ihre „Do Not Track“-Anfrage zu reagieren und die Erfassung Ihrer Daten ohne vorherige Benachrichtigung an Sie einzustellen.</PoliticsText>
        </div> 
    )
}