
import { test, expect } from "@playwright/experimental-ct-react";
import App2503 from "../example/App2503.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2503 />);
  await expect(component).toContainText("Learn React");
});
