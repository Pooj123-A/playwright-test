
import { test, expect } from "@playwright/experimental-ct-react";
import App2148 from "../example/App2148.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2148 />);
  await expect(component).toContainText("Learn React");
});
