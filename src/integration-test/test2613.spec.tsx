
import { test, expect } from "@playwright/experimental-ct-react";
import App2613 from "../example/App2613.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2613 />);
  await expect(component).toContainText("Learn React");
});
