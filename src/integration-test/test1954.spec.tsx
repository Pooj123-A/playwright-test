
import { test, expect } from "@playwright/experimental-ct-react";
import App1954 from "../example/App1954.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1954 />);
  await expect(component).toContainText("Learn React");
});
