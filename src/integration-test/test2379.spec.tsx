
import { test, expect } from "@playwright/experimental-ct-react";
import App2379 from "../example/App2379.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2379 />);
  await expect(component).toContainText("Learn React");
});
