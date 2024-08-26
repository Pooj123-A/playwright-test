
import { test, expect } from "@playwright/experimental-ct-react";
import App570 from "../example/App570.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App570 />);
  await expect(component).toContainText("Learn React");
});
