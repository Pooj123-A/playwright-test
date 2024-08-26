
import { test, expect } from "@playwright/experimental-ct-react";
import App836 from "../example/App836.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App836 />);
  await expect(component).toContainText("Learn React");
});
