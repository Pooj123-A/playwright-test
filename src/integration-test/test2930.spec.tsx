
import { test, expect } from "@playwright/experimental-ct-react";
import App2930 from "../example/App2930.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2930 />);
  await expect(component).toContainText("Learn React");
});
