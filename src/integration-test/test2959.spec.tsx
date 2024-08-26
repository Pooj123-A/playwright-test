
import { test, expect } from "@playwright/experimental-ct-react";
import App2959 from "../example/App2959.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2959 />);
  await expect(component).toContainText("Learn React");
});
