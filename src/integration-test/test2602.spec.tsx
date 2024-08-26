
import { test, expect } from "@playwright/experimental-ct-react";
import App2602 from "../example/App2602.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2602 />);
  await expect(component).toContainText("Learn React");
});
