
import { test, expect } from "@playwright/experimental-ct-react";
import App147 from "../example/App147.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App147 />);
  await expect(component).toContainText("Learn React");
});
