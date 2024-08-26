
import { test, expect } from "@playwright/experimental-ct-react";
import App2905 from "../example/App2905.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2905 />);
  await expect(component).toContainText("Learn React");
});
