
import { test, expect } from "@playwright/experimental-ct-react";
import App2736 from "../example/App2736.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2736 />);
  await expect(component).toContainText("Learn React");
});
