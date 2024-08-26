
import { test, expect } from "@playwright/experimental-ct-react";
import App2125 from "../example/App2125.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2125 />);
  await expect(component).toContainText("Learn React");
});
