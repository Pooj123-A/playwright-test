
import { test, expect } from "@playwright/experimental-ct-react";
import App1899 from "../example/App1899.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1899 />);
  await expect(component).toContainText("Learn React");
});
