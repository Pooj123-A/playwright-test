
import { test, expect } from "@playwright/experimental-ct-react";
import App2692 from "../example/App2692.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2692 />);
  await expect(component).toContainText("Learn React");
});
