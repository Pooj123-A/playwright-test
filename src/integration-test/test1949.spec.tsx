
import { test, expect } from "@playwright/experimental-ct-react";
import App1949 from "../example/App1949.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1949 />);
  await expect(component).toContainText("Learn React");
});
