
import { test, expect } from "@playwright/experimental-ct-react";
import App503 from "../example/App503.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App503 />);
  await expect(component).toContainText("Learn React");
});
