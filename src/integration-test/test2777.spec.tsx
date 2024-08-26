
import { test, expect } from "@playwright/experimental-ct-react";
import App2777 from "../example/App2777.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2777 />);
  await expect(component).toContainText("Learn React");
});
