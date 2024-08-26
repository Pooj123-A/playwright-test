
import { test, expect } from "@playwright/experimental-ct-react";
import App2586 from "../example/App2586.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2586 />);
  await expect(component).toContainText("Learn React");
});
