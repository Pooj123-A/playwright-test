
import { test, expect } from "@playwright/experimental-ct-react";
import App244 from "../example/App244.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App244 />);
  await expect(component).toContainText("Learn React");
});
