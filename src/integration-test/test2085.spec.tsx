
import { test, expect } from "@playwright/experimental-ct-react";
import App2085 from "../example/App2085.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2085 />);
  await expect(component).toContainText("Learn React");
});
