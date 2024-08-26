
import { test, expect } from "@playwright/experimental-ct-react";
import App708 from "../example/App708.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App708 />);
  await expect(component).toContainText("Learn React");
});
