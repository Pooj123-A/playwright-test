
import { test, expect } from "@playwright/experimental-ct-react";
import App58 from "../example/App58.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App58 />);
  await expect(component).toContainText("Learn React");
});