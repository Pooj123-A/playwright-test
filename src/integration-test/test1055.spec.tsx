
import { test, expect } from "@playwright/experimental-ct-react";
import App1055 from "../example/App1055.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1055 />);
  await expect(component).toContainText("Learn React");
});
