import { Header } from '@components/Header';
import { Container, Content, Icon } from './styles';

import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input/Index';
import { useNavigation } from '@react-navigation/native';

export function NewGroup(){
    const navigation = useNavigation();

    function handleNew(){
        navigation.navigate('players', {group: 'Rockeat'});
    }

    return(
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />  
                <Highlight
                    title='Nova Turma'
                    subtitle='crie a turma para adicionar pessoas'
                />

                <Input 
                    placeholder='Nome da turma'
                />
                
                <Button
                    title='Criar'
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}