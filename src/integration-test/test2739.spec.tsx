
import { test, expect } from "@playwright/experimental-ct-react";
import App2739 from "../example/App2739.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2739 />);
  await expect(component).toContainText("Learn React");
});
