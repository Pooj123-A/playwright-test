
import { test, expect } from "@playwright/experimental-ct-react";
import App2104 from "../example/App2104.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2104 />);
  await expect(component).toContainText("Learn React");
});
