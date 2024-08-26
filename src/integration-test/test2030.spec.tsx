
import { test, expect } from "@playwright/experimental-ct-react";
import App2030 from "../example/App2030.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2030 />);
  await expect(component).toContainText("Learn React");
});
