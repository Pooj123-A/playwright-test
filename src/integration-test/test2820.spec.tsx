
import { test, expect } from "@playwright/experimental-ct-react";
import App2820 from "../example/App2820.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2820 />);
  await expect(component).toContainText("Learn React");
});
