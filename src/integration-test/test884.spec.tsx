
import { test, expect } from "@playwright/experimental-ct-react";
import App884 from "../example/App884.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App884 />);
  await expect(component).toContainText("Learn React");
});
