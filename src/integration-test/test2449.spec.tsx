
import { test, expect } from "@playwright/experimental-ct-react";
import App2449 from "../example/App2449.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2449 />);
  await expect(component).toContainText("Learn React");
});
