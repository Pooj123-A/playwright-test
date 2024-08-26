
import { test, expect } from "@playwright/experimental-ct-react";
import App2896 from "../example/App2896.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2896 />);
  await expect(component).toContainText("Learn React");
});
