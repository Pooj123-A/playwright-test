
import { test, expect } from "@playwright/experimental-ct-react";
import App2604 from "../example/App2604.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2604 />);
  await expect(component).toContainText("Learn React");
});
