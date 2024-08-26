
import { test, expect } from "@playwright/experimental-ct-react";
import App2333 from "../example/App2333.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2333 />);
  await expect(component).toContainText("Learn React");
});
