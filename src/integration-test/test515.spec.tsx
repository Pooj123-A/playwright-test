
import { test, expect } from "@playwright/experimental-ct-react";
import App515 from "../example/App515.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App515 />);
  await expect(component).toContainText("Learn React");
});
