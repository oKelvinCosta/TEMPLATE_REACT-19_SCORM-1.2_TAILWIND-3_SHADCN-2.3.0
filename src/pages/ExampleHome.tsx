import { Button } from '@/components/ui/button';
import { LESSON_STATUS, useScorm } from '@/contexts/ScormContext';

export default function ExampleHome() {
  const { scormSet, scormSave, scormQuit, scormGet } = useScorm();

  function handleConcludeScorm() {
    scormSet('cmi.core.lesson_status', LESSON_STATUS.completed);
    scormSave();
    scormQuit();
  }

  const isCourseCompleted = scormGet('cmi.core.lesson_status') === LESSON_STATUS.completed;

  return (
    <div className="w-full">
      <h4>Home.tsx</h4>

      <Button onClick={handleConcludeScorm} disabled={isCourseCompleted}>
        Concluir SCORM
      </Button>

      <div className="mt-10">
        <h4>Teste de texto</h4>
        <p>
          {' '}
          Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat
          erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num significa
          nadis i pareci latim. A ordem dos tratores não altera o pão duris. Aenean aliquam molestie
          leo, vitae iaculis nisl.
        </p>
        <p>
          Si num tem leite então bota uma pinga aí cumpadi! Quem num gosta di mé, boa gentis num é.
          Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
          Per aumento de cachacis, eu reclamis.
        </p>
        <p>
          Copo furadis é disculpa de bebadis, arcu quam euismod magna. A ordem dos tratores não
          altera o pão duris. Cevadis im ampola pa arma uma pindureta. Vehicula non. Ut sed ex eros.
          Vivamus sit amet nibh non tellus tristique interdum.
        </p>
        <p>
          A ordem dos tratores não altera o pão duris. Viva Forevis aptent taciti sociosqu ad litora
          torquent. In elementis mé pra quem é amistosis quis leo. Mé faiz elementum girarzis, nisi
          eros vermeio.
        </p>
        <p>
          {' '}
          Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat
          erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num significa
          nadis i pareci latim. A ordem dos tratores não altera o pão duris. Aenean aliquam molestie
          leo, vitae iaculis nisl.
        </p>
        <p>
          Si num tem leite então bota uma pinga aí cumpadi! Quem num gosta di mé, boa gentis num é.
          Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
          Per aumento de cachacis, eu reclamis.
        </p>
        <p>
          Copo furadis é disculpa de bebadis, arcu quam euismod magna. A ordem dos tratores não
          altera o pão duris. Cevadis im ampola pa arma uma pindureta. Vehicula non. Ut sed ex eros.
          Vivamus sit amet nibh non tellus tristique interdum.
        </p>
        <p>
          A ordem dos tratores não altera o pão duris. Viva Forevis aptent taciti sociosqu ad litora
          torquent. In elementis mé pra quem é amistosis quis leo. Mé faiz elementum girarzis, nisi
          eros vermeio.
        </p>
      </div>
    </div>
  );
}
