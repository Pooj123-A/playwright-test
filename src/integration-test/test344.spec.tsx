
import { test, expect } from "@playwright/experimental-ct-react";
import App344 from "../example/App344.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App344 />);
  await expect(component).toContainText("Learn React");
});
