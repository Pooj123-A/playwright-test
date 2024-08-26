
import { test, expect } from "@playwright/experimental-ct-react";
import App2746 from "../example/App2746.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2746 />);
  await expect(component).toContainText("Learn React");
});
