
import { test, expect } from "@playwright/experimental-ct-react";
import App83 from "../example/App83.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App83 />);
  await expect(component).toContainText("Learn React");
});
