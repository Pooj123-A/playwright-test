
import { test, expect } from "@playwright/experimental-ct-react";
import App2115 from "../example/App2115.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2115 />);
  await expect(component).toContainText("Learn React");
});
