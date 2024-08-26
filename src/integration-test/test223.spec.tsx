
import { test, expect } from "@playwright/experimental-ct-react";
import App223 from "../example/App223.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App223 />);
  await expect(component).toContainText("Learn React");
});
