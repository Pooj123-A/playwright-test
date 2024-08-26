
import { test, expect } from "@playwright/experimental-ct-react";
import App586 from "../example/App586.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App586 />);
  await expect(component).toContainText("Learn React");
});
